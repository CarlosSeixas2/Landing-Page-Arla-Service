export const WHATSAPP_TRIAGE_EVENT = "arla:open-whatsapp-triage";

export const requestWhatsAppTriage = (service?: string) => {
  window.dispatchEvent(
    new CustomEvent(WHATSAPP_TRIAGE_EVENT, { detail: { service } }),
  );
};
