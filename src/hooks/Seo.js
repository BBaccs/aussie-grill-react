export function Seo(data = {}) {
    data.title = data.title || 'Aussie Grill';
    data.metaDescription = data.metaDescription || 'Welcome to Aussie Grill, where an exciting world of tast adventure awaits. Inspired by the bold flavors of outback steakhouse®, we are here to redefine the possibilities of fast-casual dining.';
  
    document.title = data.title;
    document.querySelector('meta[name="description"]').setAttribute('content', data.metaDescription);
  }

export default Seo;