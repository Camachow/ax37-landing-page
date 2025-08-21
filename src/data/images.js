// src/data/images.js
// importa todos os .webp de /assets/products e já resolve para a URL final
const modules = import.meta.glob('../assets/products/*.webp', {
  eager: true,
  import: 'default',
});

// cria um dicionário { "portal": "/assets/..." }
export const images = Object.fromEntries(
  Object.entries(modules).map(([path, src]) => {
    const key = path.split('/').pop().replace('.webp', ''); // ex: portal
    return [key, src];
  }),
);

// helper opcional
export const img = (name) => images[name];
