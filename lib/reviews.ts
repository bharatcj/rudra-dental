import { REVIEWS, SITE, type Review } from "./site";

const PLACE_ID = process.env.GOOGLE_PLACE_ID ?? "ChIJXzibfZpfUjoRWuSi32qhkHM";
const API_KEY = process.env.GOOGLE_PLACES_API_KEY;
const ENDPOINT = `https://places.googleapis.com/v1/places/${PLACE_ID}`;
const FIELDS = "rating,userRatingCount,reviews,googleMapsUri";

export type ReviewFeed = {
  reviews: Review[];
  rating: number;
  count: number;
  source: "google" | "static";
};

type PlacesReview = {
  name?: string;
  rating?: number;
  text?: { text?: string };
  originalText?: { text?: string };
  relativePublishTimeDescription?: string;
  authorAttribution?: { displayName?: string };
};

type PlacesResponse = {
  rating?: number;
  userRatingCount?: number;
  reviews?: PlacesReview[];
};

const STATIC_FEED: ReviewFeed = {
  reviews: REVIEWS,
  rating: SITE.rating.value,
  count: SITE.rating.count,
  source: "static",
};

function tagFor(text: string) {
  const lower = text.toLowerCase();
  if (lower.includes("root canal")) return "Root canal";
  if (lower.includes("implant")) return "Dental implant";
  if (lower.includes("brace") || lower.includes("ortho")) return "Braces";
  if (lower.includes("clean")) return "Teeth cleaning";
  if (lower.includes("cavity") || lower.includes("filling")) return "Cavity treatment";
  if (lower.includes("crown") || lower.includes("cap")) return "Crowns";
  if (lower.includes("child") || lower.includes("kid") || lower.includes("son"))
    return "Kids dentistry";
  return "General";
}

export async function getReviewFeed(): Promise<ReviewFeed> {
  if (!API_KEY) return STATIC_FEED;

  try {
    const response = await fetch(ENDPOINT, {
      headers: {
        "X-Goog-Api-Key": API_KEY,
        "X-Goog-FieldMask": FIELDS,
      },
      next: { revalidate: 86400 },
    });

    if (!response.ok) return STATIC_FEED;

    const data = (await response.json()) as PlacesResponse;
    const incoming = (data.reviews ?? [])
      .map((item): Review | null => {
        const body = item.text?.text ?? item.originalText?.text ?? "";
        const author = item.authorAttribution?.displayName ?? "";
        if (!body || !author) return null;
        return {
          author,
          meta: "Google review",
          when: item.relativePublishTimeDescription ?? "",
          rating: item.rating ?? 5,
          text: body,
          tag: tagFor(body),
        };
      })
      .filter((item): item is Review => item !== null);

    if (incoming.length === 0) return STATIC_FEED;

    const merged = [...incoming];
    for (const fallback of REVIEWS) {
      if (merged.length >= 12) break;
      if (merged.some((item) => item.author === fallback.author)) continue;
      merged.push(fallback);
    }

    return {
      reviews: merged,
      rating: data.rating ?? SITE.rating.value,
      count: data.userRatingCount ?? SITE.rating.count,
      source: "google",
    };
  } catch {
    return STATIC_FEED;
  }
}
