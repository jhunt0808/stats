# CLAUDE.md

## Dev servers

The developer usually has their own `yarn start` running on port 3000. When starting a dev server for testing, use a different port (e.g. `PORT=3456`) and stop only that server, by port or PID:

```sh
lsof -ti tcp:3456 | xargs kill
```

Never use a pattern match like `pkill -f "react-scripts start"` — it also kills the developer's server, which shows up for them as `error Command failed with signal "SIGTERM"`.

## Dependency pins — don't undo these during upgrades

This is still a Create React App (react-scripts 5) project, and CRA is no longer maintained. A few pins keep it working; `yarn upgrade --latest` will try to undo the `sass` one.

- **`sass` pinned to `~1.77.8`**: newer Sass versions emit dozens of deprecation warnings: the legacy JS API (used by CRA's sass-loader 12, which can't be changed without ejecting), plus `@import` and `darken()` in our `.scss` files. 1.77.8 is the last release before those warnings.
- **`resolutions` → `postcss-modules-scope` `3.2.0`**: 3.2.1 switched to postcss-selector-parser v7, which escapes class names that css-loader 6 has already escaped. CSS-module classes whose hash contains `+` or `/` (e.g. `filtersWrapper__pR+Rw`) then never match, so their styles silently disappear.

Moving off CRA (e.g. to Vite) would remove the need for both pins.

## react-data-table-component v8 quirks

- Column `selector` must be a function (`(row) => row.AB`), and each column has an `id` so `defaultSortFieldId` can find it.
- Filter bars go in the `subHeader` prop (there is no `subHeaderComponent`).
- v8 ignores the `headCells`/`cells` padding in `customStyles`. The 10px cell padding every table uses is set globally in `src/index.css` instead.
- `customStyles` keys must be camelCase (`alignItems`, not `'align-items'`); v8 applies them as inline styles.
- The sticky header row sits at `z-index: 1`, so react-select menus use `src/shared/selectStyles.js` (menu `zIndex: 10`) to open on top of it. Use it for any new `<Select>`.
- The sort icon is wider than v6's, so very narrow columns (≤ 60px) truncate their headings.
