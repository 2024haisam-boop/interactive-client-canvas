<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Keep the public experience in the index route with in-page navigation because the requested customer journey must stay on one page.
- Keep portfolio project data in a browser-safe shared module and previews in an accessible dialog; external frame restrictions must be respected, with captures clearly distinguished from live sites.
- The contact form keeps an explicitly labeled email-draft fallback until the owner's Gmail connection is authorized; never present a draft as a sent enquiry.
- Keep supplied testimonials in a browser-safe data module with category/rating filters and pagination, so every quote stays accessible without an oversized page; never imply third-party verification.
- Keep all visual colors in semantic global CSS tokens and respect reduced-motion preferences for animation.
