from playwright.sync_api import Page, expect, sync_playwright

def verify_homepage(page: Page):
    # Listen for console errors
    page.on("console", lambda msg: print(f"Console: {msg.text}"))
    page.on("pageerror", lambda exc: print(f"PageError: {exc}"))

    # 1. Go to the homepage
    page.goto("http://localhost:5173/")

    # 2. Wait for content. Use a more permissive locator.
    # The text is "JULES.DEV" but split.
    # We can search for the "JULES" part.
    header = page.get_by_text("JULES", exact=False).first
    expect(header).to_be_visible()

    # 3. Take a screenshot
    page.screenshot(path="/home/jules/verification/homepage.png")
    print("Screenshot taken.")

if __name__ == "__main__":
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        try:
            verify_homepage(page)
        except Exception as e:
            print(f"Error: {e}")
        finally:
            browser.close()
