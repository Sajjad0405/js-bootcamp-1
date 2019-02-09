// Box object
const box = {
    locked: true,
    unlock() { this.locked = false; },
    lock() { this.locked = true;  },
    _content: [],
    get content() {
        if (this.locked) throw new Error("Locked!");
        return this._content;
    }
};

// withBoxUnlocked function
function withBoxUnlocked(fn) {
    if (box.locked) {
        box.unlock();
    }
    try {
        fn();
    } finally {
        box.lock();
    }
}

// call function
withBoxUnlocked(function() {
    box.content.push("gold piece");
});

// check if it worked
try {
    withBoxUnlocked(function() {
        console.log(box.content);
        throw new Error("Pirates on the horizon! Abort!");
    })
} catch(error) {
    console.log(`Error raised... ${error}`);
}

console.log(box.locked);