function defender() {
    if (!window.location.origin.includes("localhost")) {
        setInterval(() => { eval("debugger;"); });
    }
}

defender();