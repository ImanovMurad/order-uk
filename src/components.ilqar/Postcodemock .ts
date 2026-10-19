// Mock data: gerçek API yerine kullanılır.
// Daha sonra checkPostcode içindeki setTimeout kısmını fetch(...) ile değiştirmen yeterli.

export type PostcodeResult =
  | { status: "ok"; postcode: string }
  | { status: "not-delivered"; postcode: string }
  | { status: "invalid"; postcode: string };

// Teslimat yapılan bölgeler (boşluksuz, büyük harf)
export const deliverablePostcodes: string[] = [
  "EN492F", // tasarımdaki başarılı örnek
  "AA11BB",
  "SE12TF", // Tooley St, London Bridge
  "E14AB",
  "N19GU",
  "W12JB",
];

// Teslimat yapılmayan örnek: EN4 9QF (tasarımdaki hata durumu)

// Basit UK postcode formatı kontrolü
const UK_POSTCODE_REGEX = /^[A-Z]{1,2}\d[A-Z\d]?\d[A-Z]{2}$/;

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

    // API gecikmesini simüle et
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

// Modal içindeki resimler (mock). Kendi görsellerini import edip buraya koyabilirsin.
// null olursa gradient + emoji yedek görünür.
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