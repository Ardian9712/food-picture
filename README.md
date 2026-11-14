# food-picture-01

Entry for the make.fun competition **food-picture-01 — "Make the best-looking food picture"**.

## What the program does

`main.ts` is a deterministic Node 22 TypeScript program (standard library only, no network).
It copies `entry.png` from the program's own directory into the output directory given by
the `MAKEFUN_OUTPUT_DIR` environment variable (falling back to `/output` when unset),
creating the output directory if needed. The copied file is always named `entry.png`.

Run it with:

```sh
MAKEFUN_OUTPUT_DIR=/path/to/out node main.ts
```

## The image

`entry.png` (1024x1024) is a ramen hero shot: chopsticks lifting glossy noodles,
jammy eggs, chili oil, steam rising, against a dark background.

## Verification

The program was run twice into two different output directories; both outputs were
byte-identical to each other and to the source image
(sha256 `4f70a7c2cb69d9f1a443334de9d7b1441c114b3113704d93250668b2080b196c`).

