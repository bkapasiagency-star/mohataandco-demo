// Centralized contact touchpoints so numbers/links stay consistent across the site
export const CONTACT = {
  whatsappNumber: '919879936998', // no + / spaces, used for wa.me links
  whatsappDisplay: '+91 98799 36998',
  phones: [
    { display: '+91 98799 36998', tel: '+919879936998' },
    { display: '+91 74058 95359', tel: '+917405895359' },
  ],
  email: 'anuj@mohata.co.in',
};

export const telHref = (tel: string) => `tel:${tel}`;
export const mailHref = (email: string) => `mailto:${email}`;
export const waHref = (number: string, message?: string) =>
  `https://wa.me/${number}${message ? `?text=${encodeURIComponent(message)}` : ''}`;
