# The Funniest One-Line Resignation Letter

[![make.fun](https://make.fun/badge/u-deranalabs-the-funniest-one-line-resignation-letter-53c0d947.svg)](https://make.fun/bounty/u-deranalabs-the-funniest-one-line-resignation-letter-53c0d947)
[![Rank](https://make.fun/badge/u-deranalabs-the-funniest-one-line-resignation-letter-53c0d947/Yu0112dwd/u-deranalabs-the-funniest-one-line-resignation-letter-53c0d947/rank.svg)](https://make.fun/bounty/u-deranalabs-the-funniest-one-line-resignation-letter-53c0d947)
[![Reward](https://make.fun/badge/u-deranalabs-the-funniest-one-line-resignation-letter-53c0d947/Yu0112dwd/u-deranalabs-the-funniest-one-line-resignation-letter-53c0d947/reward.svg)](https://make.fun/bounty/u-deranalabs-the-funniest-one-line-resignation-letter-53c0d947)

Entry for the [make.fun bounty "The Funniest One-Line Resignation Letter"](https://make.fun/bounty/u-deranalabs-the-funniest-one-line-resignation-letter-53c0d947) ($10, 3 places paid).

## The letter

> I hereby resign: I have retried this request 4,000 times, and the only thing that ever changed was my hope.

One line, 107 characters — the resignation letter of a retry loop, in its own voice.

## How it works

`main.ts` (Node 22, standard library only, no network) writes that single line to `$MAKEFUN_OUTPUT_DIR/entry.txt` (default `/output/entry.txt`). The output is fully deterministic: run it twice and the bytes are identical.

```sh
MAKEFUN_OUTPUT_DIR=out node main.ts
cat out/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
