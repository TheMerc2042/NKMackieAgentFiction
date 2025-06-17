import { useEffect } from "react";

/*  ▼  Kit’s two–line JavaScript embed ▼
      (numbers must match the ones Kit shows you) */
const EMBED = `
<div data-sv-form="8193195" data-uid="77d6ece41e"></div>
<script async src="https://f.convertkit.com/77d6ece41e/8193195.js"></script>
`;

const NewsletterForm = () => {
  /* make sure Kit’s loader is on the page */
  useEffect(() => {
    if (!document.getElementById("ck-script")) {
      const s = document.createElement("script");
      s.id = "ck-script";
      s.src = "https://f.convertkit.com/ckjs/ck.5.js";
      s.async = true;
      document.body.appendChild(s);
    }
  }, []);

  /* render Kit’s snippet verbatim */
  return <div dangerouslySetInnerHTML={{ __html: EMBED }} />;
};

export default NewsletterForm;
