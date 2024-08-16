function scaleUp() {
    let rect = Object.assign({}, workspace.activeWindow.frameGeometry);
    rect.width *= 2;
    rect.height *= 2;
    workspace.activeWindow.frameGeometry = rect;
}

function scaleDown() {
    let rect = Object.assign({}, workspace.activeWindow.frameGeometry);

    // Can't scale down due to odd resolution.
    if (rect.width % 2 != 0 || rect.height % 2 != 0) {
        return;
    }

    rect.width /= 2;
    rect.height /= 2;
    workspace.activeWindow.frameGeometry = rect;
}

registerShortcut(
    "window-integer-scale-up",
    "Scale current window up 2.0x",
    () => {
        "Alt-PgUp", scaleUp();
    }
);

registerShortcut(
    "window-integer-scale-down",
    "Scale current window down 0.5x",
    "Alt-PgDown",
    () => {
        scaleDown();
    }
);
