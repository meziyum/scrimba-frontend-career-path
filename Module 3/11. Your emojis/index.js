var myEmojis = ["👨‍💻", "⛷", "🍲"]

if( localStorage.getItem('my_emojis')){
    myEmojis = JSON.parse(localStorage.getItem('my_emojis'))
}

function renderEmojis() {
    const emojiContainer = document.getElementById("emoji-container")
    emojiContainer.innerHTML = ""
    for (let i = 0; i < myEmojis.length; i++) {
        const emoji = document.createElement('span')
        emoji.textContent = myEmojis[i]
        emojiContainer.append(emoji)
    }
    localStorage.setItem('my_emojis', JSON.stringify(myEmojis))
}

renderEmojis()

const pushBtn = document.getElementById("push-btn")
pushBtn.addEventListener("click", () => add_emoji('end'))

const unshiftBtn = document.getElementById("unshift-btn")
unshiftBtn.addEventListener("click", () => add_emoji('start'))

function add_emoji( position ){
    const emojiInput = document.getElementById("emoji-input")
    if (emojiInput.value) {
        if( position === 'start')
        myEmojis.unshift(emojiInput.value)
        else if( position === 'end')
        myEmojis.push(emojiInput.value)
        emojiInput.value = ""
        renderEmojis()
    }
}

const popBtn = document.getElementById("pop-btn")
popBtn.addEventListener("click", () => pop_emoji('end'))

const shiftBtn = document.getElementById("shift-btn")
shiftBtn.addEventListener("click", () => pop_emoji('start'))

function pop_emoji( position ){
    if( position === 'start')
    myEmojis.shift()
    else if( position === 'end')
    myEmojis.pop()
    renderEmojis()
}