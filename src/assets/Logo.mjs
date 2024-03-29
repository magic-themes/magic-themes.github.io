export const View = (root = '/') =>
  Link({ to: root, class: 'Logo' }, [
    svg({ xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 512 444' }, [
      path({ d: 'M512 444L256 0 0 444z', fill: '#663695' }),
      circle({ cx: '256', cy: '294', r: '130', fill: '#fff' }),
      path({
        d: 'M256 81v53m184 270l-43-29M72 404l43-29',
        class: 'stroke',
      }),
      path({
        d: 'M260 214c-5 0-5 3-7 6-2-3-3-6-7-6h-65c-4 0-3 9-3 14 0 0-10-1-10 6v125s0 6 5 6h107v16c1 5 4 3 13-2 5 2 9 9 12 2v-16h27c6 0 6-6 6-6V234s0-6-10-6c0-14-4-14-4-14zm-76 7l61 1s4-1 5 6v105h-66zm78 1h60v111h-66V228c0-6 6-6 6-6zm-86 12h2v116c0 3 3 3 3 3h55v6h-62V234zm152 0h4v125h-27v-6h20s3 1 3-3zm-134 2c-3 4 0 8 0 8h48s2-4 0-8zm70 0c-3 4 0 8 0 8h48s3-4 0-8zm-70 13c-3 4 0 8 0 8h48s2-4 0-8zm70 0c-3 4 0 8 0 8h48s3-4 0-8zm-70 13c-3 3 0 7 0 7h48s2-4 0-7zm70 0c-3 3 0 7 0 7h48s3-4 0-7zm-70 12c-3 4 0 8 0 8h48s2-4 0-8zm70 0c-3 4 0 8 0 8h48s3-4 0-8zm-70 13c-3 4 0 8 0 8h48s2-4 0-8zm70 0c-3 4 0 8 0 8h48s3-4 0-8zm-70 13c-3 4 0 8 0 8h48s2-4 0-8zm70 0c-3 4 0 8 0 8h48s3-4 0-8zm-70 13c-3 3 0 7 0 7h48s2-4 0-7zm70 0c-3 3 0 7 0 7h48s3-4 0-7zm-80 27h66v7h-66zm72 0h66v7h-66zm-13 13h19v6h-19zm24 0h13v6h-13zm19 0h12v22s-2-4-5-4c-4 0-7 4-7 4z',
        fill: '#639',
      }),
    ]),
  ])

export const style = {
  '.stroke': {
    fill: 'none',
    stroke: '#fff',
    strokeWidth: '15',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
}
