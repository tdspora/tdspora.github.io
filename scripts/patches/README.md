# The vendored Jira Service Management widget

These bundles are a **fork of Atlassian's support widget**, not a copy. Read this
before changing anything in `static/scripts/`, the JSM project's widget settings,
or the request type the widget points at.

## What is here

| File | What it is |
| --- | --- |
| `scriptAtlassianPure1.js` | Atlassian's embed loader, unmodified |
| `scriptAtlassianPure2.js` | Atlassian's widget application bundle, unmodified |
| `scriptAtlassian1.js` | `Pure1` + `patches/01-embed-hide-and-rehost-iframe.patch` — **this is what ships** |
| `scriptAtlassian2.js` | `Pure2` + `patches/02-widget-disable-field-validation.patch` — **this is what ships** |

`scripts/verify-widget-patches.sh` rebuilds the shipped files from the pristine
ones and fails if they have drifted. Run it after any change here.

## Why it is a fork

The site does not show Atlassian's widget UI. It renders its own branded form and
uses the widget purely as a submission engine, driven through the iframe's DOM.

That is only possible if the iframe is **same-origin**, which it is not by
default. Patch 01 rewrites the iframe's body script to an absolute `tdspora.ai`
URL so the frame lands on our origin, and hides the frame so Atlassian's own
launcher never appears. Patch 02 disables the widget's per-field validation,
because the visible form does the validating.

## The three rules

1. **The page and these bundles must be served from the same origin.** Anywhere
   else, reading into the iframe throws a cross-origin `SecurityError`.
   `src/lib/supportWidget.js` catches it and the UI falls back to the support
   portal, so the failure is graceful — but the widget will not work there.

2. **The widget's JSM request type must expose exactly four fields:** summary,
   description, attachment, email. Patch 02 hardcodes their validity. Adding a
   required field in Jira makes the widget submit an incomplete payload and
   report nothing useful to the visitor. Richer forms belong on the portal,
   which runs Atlassian's unpatched code.

3. **Do not hand-edit the shipped bundles.** Change the pristine file, regenerate
   the patch, and re-run the verify script — otherwise the next person is reading
   minified code to work out what was done and why.

## Upgrading the bundles

There is no version marker in either file, so the vendored version is unknown and
an upgrade is a jump of unknown size. It is not a routine action:

1. Download the current `embed.js` and its iframe bundle from Atlassian, saving
   as **UTF-8** (the existing pristine copies went through a Latin-1 round trip;
   the second hunk of patch 02 only exists to repair that).
2. Replace the `Pure*` files, re-apply the patches, resolve the rejects by hand.
3. Re-derive the element chains in `src/lib/supportWidget.js`. Atlassian's markup
   is minified and positional, so an upgrade will almost certainly move them.
4. Test the whole path end to end: open, fill, attach, submit, success, error.

Nothing in this repository detects a bundle upgrade breaking the chains. Only the
end-to-end test does.
