import { services } from "@/content/services";

/**
 * Returns all active dental services.
 */
export function getActiveServices() {
  return services.filter((service) => Boolean(service.active));
}

/**
 * Returns active dental services grouped by category.
 * Shape: Record<string, Service[]>
 */
export function getServicesByCategory() {
  const activeServices = getActiveServices();
  const grouped = {};

  for (const service of activeServices) {
    const category = service.category || "General";
    if (!grouped[category]) {
      grouped[category] = [];
    }
    grouped[category].push(service);
  }

  return grouped;
}

/**
 * Returns a specific service matching the given slug.
 */
export function getServiceBySlug(slug) {
  if (!slug) return undefined;
  return services.find((service) => service.slug === slug);
}
