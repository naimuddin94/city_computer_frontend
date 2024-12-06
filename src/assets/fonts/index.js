import Font from 'next/font/local'


export const gumelaArabic = Font({
    src: [
      {
        path: '../fonts/GumelaArabic-Bold.otf',
        weight: '700',
      },
      {
        path: '../fonts/GumelaArabic-Light.otf',
        weight: '300',
      },
      {
        path: '../fonts/GumelaArabic-Regular.otf',
        weight: '400',
      },
    ]
})