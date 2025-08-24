// Danh sách từ vựng
const vocabulary = [
    { icon: "🍰", en: "Sweet", vi: "Ngọt", ex: "The cake is sweet." },
    { icon: "🍋", en: "Sour", vi: "Chua", ex: "The lemon is sour." },
    { icon: "🌶️", en: "Spicy", vi: "Cay", ex: "The chili is spicy." },
    { icon: "☕", en: "Bitter", vi: "Đắng", ex: "The coffee tastes bitter." },
    { icon: "🧂", en: "Salty", vi: "Mặn", ex: "The soup is too salty." },
    { icon: "🥣", en: "Bland", vi: "Nhạt", ex: "The curry tastes bland." },
    { icon: "🍕", en: "Delicious", vi: "Ngon", ex: "The pizza is delicious." },
    { icon: "🤢", en: "Awful", vi: "Dở", ex: "The food tastes awful." },
    { icon: "😅", en: "Not bad", vi: "Dở", ex: "It tastes not bad." },
    { icon: "🍟", en: "Crispy", vi: "Giòn", ex: "The chips are crispy." },
    { icon: "🍊", en: "Juicy", vi: "Mọng nước", ex: "The orange is juicy." },
    { icon: "🥗", en: "Fresh", vi: "Tươi", ex: "The vegetables are fresh." },
    { icon: "🍲", en: "Savory", vi: "Đậm đà", ex: "I love savory dishes." }
];

const container = document.getElementById("cards");

// Render thẻ từ vựng
vocabulary.forEach(word => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
        <div class="icon">${word.icon}</div>
        <div class="english">${word.en}</div>
        <div class="vietnamese">${word.vi}</div>
        <div class="example">${word.ex}</div>
        <div class="play">🔊 Nghe</div>
    `;
    card.querySelector(".play").onclick = (e) => {
        e.stopPropagation();
        speakWordAndExample(word.en, word.ex);
    };
    container.appendChild(card);
});

// Đọc từ rồi đọc câu ví dụ liền mạch
function speakWordAndExample(word, example) {
    speechSynthesis.cancel(); // Hủy mọi speech trước đó

    // Nối từ + câu bằng dấu phẩy để đọc liền mạch
    const utter = new SpeechSynthesisUtterance(`${word}. ${example}`);
    utter.lang = 'en-US';
    utter.rate = 1;
    speechSynthesis.speak(utter);
}
