let nonCallable = 1;

function withTooManyParams(a, b, c, d, e) {
    return a + b + c + d + e;
}

nonCallable();
