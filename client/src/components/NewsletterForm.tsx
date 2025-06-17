import { useEffect } from "react";

/*
  We drop Kit’s full HTML into the page with dangerouslySetInnerHTML.
  ✔  keeps all Kit styling & behaviour
  ✔  no JSX parsing errors
*/
const EMBED_HTML = `
<form action="https://app.kit.com/forms/8193195/subscriptions"
      class="seva-form formkit-form"
      method="post"
      data-sv-form="8193195"
      data-uid="77d6ece41e"
      data-format="inline"
      data-version="5"
      style="background-color:#f9fafb;border-radius:4px;">

  <div class="formkit-background" style="opacity:0.2;"></div>

  <div data-style="minimal">

    <div class="formkit-header" data-element="header"
         style="color:#4d4d4d;font-size:27px;font-weight:700;font-family:'Montserrat',sans-serif;">
      <h2>Join the Newsletter</h2>
    </div>

    <div class="formkit-subheader" data-element="subheader"
         style="color:#686868;font-size:18px;font-family:'Montserrat',sans-serif;">
      Subscribe to get our latest content by email.
    </div>

    <ul class="formkit-alert formkit-alert-error"
        data-element="errors" data-group="alert"></ul>

    <div data-element="fields" data-stacked="false"
         class="seva-fields formkit-fields">

      <div class="formkit-field">
        <input class="formkit-input"
               name="email_address"
               aria-label="Email Address"
               placeholder="Email Address"
               required
               type="email"
               style="color:#000;border-color:#e3e3e3;border-radius:4px;font-weight:400;font-family:'Montserrat',sans-serif;">
      </div>

      <button data-element="submit"
              class="formkit-submit"
              style="color:#fff;background-color:#1677be;border-radius:4px;font-weight:400;font-family:'Montserrat',sans-serif;">
        <div class="formkit-spinner"><div></div><div></div><div></div></div>
        <span>Subscribe</span>
      </button>

    </div>

    <div class="formkit-guarantee" data-element="guarantee"
         style="color:#4d4d4d;font-size:13px;font-weight:400;font-family:'Montserrat',sans-serif;">
      We won't send you spam. Unsubscribe at any time.
    </div>

    <div class="formkit-powered-by-convertkit-container">
      <a href="https://kit.com/features/forms?utm_campaign=poweredby&amp;utm_content=form&amp;utm_medium=referral&amp;utm_source=dynamic"
         data-element="powered-by"
         class="formkit-powered-by-convertkit"
         data-variant="dark"
         target="_blank"
         rel="nofollow"
         style="font-family:'Montserrat',sans-serif;">
        Built with Kit
      </a>
    </div>

  </div>
</form>
`;

const NewsletterForm = () => {
  /* make sure the loader script is in the page */
  useEffect(() => {
    if (!document.getElementById("ck-script")) {
      const s = document.createElement("script");
      s.src = "https://f.convertkit.com/ckjs/ck.5.js";
      s.async = true;
      s.id = "ck-script";
      document.body.appendChild(s);
    }
  }, []);

  /* render Kit’s HTML verbatim */
  return <div dangerouslySetInnerHTML={{ __html: EMBED_HTML }} />;
};

export default NewsletterForm;
