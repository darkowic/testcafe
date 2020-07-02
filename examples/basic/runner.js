const createTestCafe = require("testcafe");

(async () => {
    const testCafe = await createTestCafe("localhost", 1337, 1338, null, true, true);
    const runner = testCafe.createRunner();

    await runner.src("./test.js").browsers("chrome").run({
        quarantineMode: true
    });

    testCafe.close();
})();
