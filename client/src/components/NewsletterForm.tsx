/*  This *replaces* every line in the file.
    It embeds the full Kit form as plain HTML.
    No fetch calls, no scripts, no duplicates.            */

const NewsletterForm = () => {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: `
<form action="https://app.kit.com/forms/8193195/subscriptions"
      method="post"
      class="seva-form formkit-form"
      data-sv-form="8193195"
      data-uid="77d6ece41e"
      data-format="inline"
      data-version="5"
      style="
        max-width:700px;
        margin:0 auto;
        padding:24px;
        background:#F9FAFB;
        border:1px solid #e3e3e3;
        border-radius:6px;
        text-align:center;
      ">

  <h2 style="font-size:24px;font-weight:700;margin:0 0 12px 0;color:#1e1e1e;">
    Join the Newsletter
  </h2>

  <p style="margin:0 0 20px 0;color:#444;">
    Subscribe to get our latest content by email.
  </p>

  <div style="
        display:flex;
        flex-wrap:wrap;
        gap:12px;
        justify-content:center;
        margin-bottom:20px;">
    <input type="email"
           name="email_address"
           placeholder="Email Address"
           required
           style="
             flex:1 1 220px;
             min-width:220px;
             padding:12px;
             border:1px solid #ccc;
             border-radius:4px;
             font-size:16px;" />

    <button type="submit"
            style="
              padding:12px 24px;
              background:#1677be;
              color:#fff;
              border:none;
              border-radius:4px;
              font-weight:600;
              font-size:16px;
              cursor:pointer;">
      Subscribe
    </button>
  </div>

  <p style="font-size:12px;color:#666;margin:0 0 12px 0;">
    We won't send you spam. Unsubscribe at any time.
  </p>

  <a href="https://kit.com"
     style="font-size:13px;color:#333;text-decoration:none;">
     Built with Kit
  </a>
</form>
        `,
      }}
    />
  );
};

export default NewsletterForm;
