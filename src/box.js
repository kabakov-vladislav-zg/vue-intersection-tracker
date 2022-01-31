export class Box {
  constructor(elem, rootMargin) {
    let box = elem.getBoundingClientRect()

    let margin = rootMargin.split(' ')
    let marginTop, marginRight, marginBottom, marginLeft
    switch (margin.length) {
      case 1:
        marginTop = marginRight = marginBottom = marginLeft = margin[0]
        break
      case 2:
        marginTop = marginBottom = margin[0]
        marginRight = marginLeft = margin[1]
        break
      case 3:
        marginTop = margin[0]
        marginRight = marginLeft = margin[1]
        marginBottom = margin[2]
        break
      case 4:
        marginTop = margin[0]
        marginRight = margin[1]
        marginBottom = margin[2]
        marginLeft = margin[3]
        break
    }

    margin = [
      marginTop,
      marginRight,
      marginBottom,
      marginLeft
    ]
    margin = margin.map((value, index) => {
      let unit = value.indexOf('px') || value.indexOf('%')
      let num = Number(value.slice(0, unit))
      if(~value.indexOf('px')) {
        return num
      } else {
        let position = (index + 1) % 2 ? 'height' : 'width'

        return num * box[position] / 100
      }
    })

    this.top = box.top - margin[0]
    this.bottom = box.bottom + margin[2]
    this.height = this.bottom - this.top
  }
}