/***********************************
 * Retry Challenge (#1)
 **********************************/
class MultiplicationUnitFailure extends Error {}

function primitiveMultiply(a,b) {
    if (Math.random() < 0.2) {
        return a * b;
    } else {
        throw new MultiplicationUnitFailure("Fail");
    }
}

// here's a test for the multiply function
// will throw an error if working unexpectedly
function reliableMultiply(a,b) {
    for(;;) {
        try {
            return primitiveMultiply(a,b);
        } catch(e) {
            if(!(e instanceof MultiplicationUnitFailure)) {
                throw e;
            }
        }
    }
}

console.log(reliableMultiply(8,8));

/***********************************
 * The locked Box Challenge (#2)
 **********************************/
const box = {
    locked: true,
    unlock() { this.locked = false; },
    lock() { this.locked = true; },
    _content: [],
    get content() {
        if(this.locked) throw new Error("Locked!");
        return this._content;
    }
};

function withBoxUnlocked(body) {
    let locked = box.locked;
    if(!locked) {
        return body();
    }

    box.unlock();
    try {
        return body();
    } finally {
        box.lock();
    }
}

withBoxUnlocked(function() {
    box.content.push("Lots of money!");
});

try {
    withBoxUnlocked(function() {
        throw new Error("Enemies arrived.. abort!");
    });
} catch(e) {
    console.log("Error raised:", e);
}

console.log(box.locked);