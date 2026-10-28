const products = [
  {
    category: "INDUSTRIAL EQUIPMENT",
    title: "産業機械・設備",
    description: "コンプレッサーや分離機・濾過機など、さまざまな工程に適した機器をご提案します。",
    image: "https://placehold.jp/600x400.png?text=Item",
    imageAlt: "産業機械・設備のイメージ",
  },
  {
    category: "ENERGY & ENVIRONMENT",
    title: "エネルギー・環境",
    description: "環境負荷の低減や安定したエネルギー利用に向け、設備とサービスを組み合わせます。",
    image: "https://placehold.jp/600x400.png?text=Item",
    imageAlt: "エネルギー・環境分野のイメージ",
  },
  {
    category: "ENGINEERING SUPPORT",
    title: "エンジニアリング支援",
    description: "導入計画から保守・更新まで、設備のライフサイクルに寄り添い事業運営を支えます。",
    image: "https://placehold.jp/600x400.png?text=Item",
    imageAlt: "エンジニアリング支援のイメージ",
  },
];

const testimonials = [
  {
    role: "製造業 設備ご担当者様",
    quote: "設備の更新にあたり、現場の条件を踏まえて複数の選択肢を整理してもらえました。導入後の運用も見通せる提案で助かりました。",
  },
  {
    role: "環境関連施設 運営ご担当者様",
    quote: "設備だけでなく運用面まで相談できたことで、課題の優先順位が明確になりました。関係者間の調整もスムーズに進みました。",
  },
];

const faqs = [
  {
    question: "どのような製品・サービスを取り扱っていますか？",
    answer: "産業機械、環境・エネルギー関連設備をはじめ、幅広い分野の製品・サービスを取り扱っています。お客さまの用途や現場条件を伺い、適した選択肢をご案内します。",
  },
  {
    question: "製品が決まっていない段階でも相談できますか？",
    answer: "はい。課題や実現したいことが決まっている段階からご相談いただけます。現状やご要望を伺い、解決に向けた進め方を一緒に検討します。",
  },
  {
    question: "導入後の保守や更新についても相談できますか？",
    answer: "導入後の運用、保守、設備更新など、ライフサイクル全般についてご相談いただけます。対象製品やご希望の支援内容をお問い合わせ時にお知らせください。",
  },
  {
    question: "対応エリアを教えてください。",
    answer: "ご相談内容や製品によって対応範囲が異なります。まずはお問い合わせフォームまたはメールから、対象の地域とご要望をお知らせください。",
  },
];

const productList = document.querySelector("#product-list");
const voiceList = document.querySelector("#voice-list");
const faqList = document.querySelector("#faq-list");

function renderProducts() {
  products.forEach((product, index) => {
    const article = document.createElement("article");
    article.className = "product-card";

    const imageWrap = document.createElement("div");
    imageWrap.className = "product-image";
    const image = document.createElement("img");
    image.src = product.image;
    image.alt = product.imageAlt;
    image.loading = "lazy";
    const number = document.createElement("span");
    number.className = "product-index";
    number.textContent = `0${index + 1}`;
    imageWrap.append(image, number);

    const body = document.createElement("div");
    body.className = "product-body";
    const category = document.createElement("p");
    category.className = "product-category";
    category.textContent = product.category;
    const title = document.createElement("h3");
    title.textContent = product.title;
    const description = document.createElement("p");
    description.textContent = product.description;
    const link = document.createElement("a");
    link.className = "product-link";
    link.href = "#contact";
    link.append(document.createTextNode("この分野について相談する"));
    const arrow = document.createElement("span");
    arrow.setAttribute("aria-hidden", "true");
    arrow.textContent = "↗";
    link.append(arrow);
    body.append(category, title, description, link);
    article.append(imageWrap, body);
    productList.append(article);
  });
}

function renderTestimonials() {
  testimonials.forEach((testimonial) => {
    const article = document.createElement("article");
    article.className = "voice-card";
    const avatar = document.createElement("img");
    avatar.className = "voice-avatar";
    avatar.src = "https://placehold.jp/150x150.png?text=User";
    avatar.alt = "";
    avatar.loading = "lazy";
    const role = document.createElement("p");
    role.className = "voice-label";
    role.textContent = testimonial.role;
    const quote = document.createElement("p");
    quote.className = "voice-quote";
    quote.textContent = `「${testimonial.quote}」`;
    article.append(avatar, role, quote);
    voiceList.append(article);
  });
}

function renderFaqs() {
  faqs.forEach((faq, index) => {
    const item = document.createElement("article");
    item.className = "faq-item";
    const question = document.createElement("button");
    question.className = "faq-question";
    question.type = "button";
    question.id = `faq-question-${index + 1}`;
    question.setAttribute("aria-expanded", "false");
    question.setAttribute("aria-controls", `faq-answer-${index + 1}`);

    const qMark = document.createElement("span");
    qMark.className = "faq-q-mark";
    qMark.setAttribute("aria-hidden", "true");
    qMark.textContent = "Q";
    const questionText = document.createElement("span");
    questionText.className = "faq-question-text";
    questionText.textContent = faq.question;
    const icon = document.createElement("span");
    icon.className = "faq-toggle-icon";
    icon.setAttribute("aria-hidden", "true");
    question.append(qMark, questionText, icon);

    const answer = document.createElement("div");
    answer.className = "faq-answer";
    answer.id = `faq-answer-${index + 1}`;
    answer.setAttribute("role", "region");
    answer.setAttribute("aria-labelledby", question.id);
    const answerInner = document.createElement("div");
    answerInner.className = "faq-answer-inner";
    const aMark = document.createElement("span");
    aMark.className = "faq-a-mark";
    aMark.setAttribute("aria-hidden", "true");
    aMark.textContent = "A";
    const answerText = document.createElement("p");
    answerText.textContent = faq.answer;
    answerInner.append(aMark, answerText);
    answer.append(answerInner);

    question.addEventListener("click", () => {
      const isExpanded = question.getAttribute("aria-expanded") === "true";
      question.setAttribute("aria-expanded", String(!isExpanded));
      answer.classList.toggle("is-open", !isExpanded);
    });

    item.append(question, answer);
    faqList.append(item);
  });
}

renderProducts();
renderTestimonials();
renderFaqs();

const menuToggle = document.querySelector(".menu-toggle");
const globalNav = document.querySelector(".global-nav");

menuToggle.addEventListener("click", () => {
  const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!isExpanded));
  menuToggle.setAttribute("aria-label", isExpanded ? "メニューを開く" : "メニューを閉じる");
  globalNav.classList.toggle("is-open", !isExpanded);
});

globalNav.addEventListener("click", (event) => {
  if (event.target.closest("a") && window.matchMedia("(max-width: 768px)").matches) {
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "メニューを開く");
    globalNav.classList.remove("is-open");
  }
});