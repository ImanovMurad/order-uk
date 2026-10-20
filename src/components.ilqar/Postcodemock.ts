
export type PostcodeResult =
  | { status: "ok"; postcode: string }
  | { status: "not-delivered"; postcode: string }
  | { status: "invalid"; postcode: string };

export const deliverablePostcodes: string[] = [
  "EN492F", 
  "AA11BB",
  "SE12TF", 
  "E14AB",
  "N19GU",
  "W12JB",
];


const UK_POSTCODE_REGEX = /^[A-Z]{1,2}\d[A-Z\d]?\d[A-Z\d]{2}$/;

export const normalizePostcode = (value: string): string =>
  value.replace(/\s+/g, "").toUpperCase();

// "EN492F" -> "EN4 92F"
export const formatPostcode = (value: string): string => {
  const n = normalizePostcode(value);
  return n.length > 3 ? `${n.slice(0, -3)} ${n.slice(-3)}` : n;
};

export const checkPostcode = (input: string): Promise<PostcodeResult> =>
  new Promise((resolve) => {
    const normalized = normalizePostcode(input);
    const formatted = formatPostcode(normalized);

    setTimeout(() => {
      if (!UK_POSTCODE_REGEX.test(normalized)) {
        resolve({ status: "invalid", postcode: formatted });
      } else if (deliverablePostcodes.includes(normalized)) {
        resolve({ status: "ok", postcode: formatted });
      } else {
        resolve({ status: "not-delivered", postcode: formatted });
      }
    }, 600);
  });

export const modalImages: {
  idle: string | null;
  error: string | null;
  success: string | null;
} = {
  idle: null,
  error: null,
  success: null,
};

export const MINIMUM_DELIVERY = 10; // £