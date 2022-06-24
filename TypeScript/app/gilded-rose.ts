export class Item {
  name: string;
  sellIn: number;
  quality: number;

  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

export class GildedRose {
  items: Array<Item>;

  constructor(items = [] as Array<Item>) {
    this.items = items;
  }

  updateQuality() {
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i].name != 'Aged Brie' && this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
        if (this.items[i].quality > 0) {
          this.decreaseQualityFor(i);
        }
      } else {
        if (this.items[i].quality < 50) {
         this.increaseQualityForQualityLessThan50(i)
          if (this.items[i].name == 'Backstage passes to a TAFKAL80ETC concert') {
            if (this.items[i].quality < 50 && (this.items[i].sellIn < 11 || this.items[i].sellIn < 6)) {
              this.increaseQualityForQualityLessThan50(i)
            }
          }
        }
      }
      if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
        this.items[i].sellIn = this.items[i].sellIn - 1;
      }
      if (this.items[i].sellIn < 0) {
        if (this.items[i].name != 'Aged Brie' || 'Backstage passes to a TAFKAL80ETC concert') {
          if (this.items[i].quality > 0) {
            this.decreaseQualityFor(i);
          }
          else {
            this.items[i].quality = this.items[i].quality - this.items[i].quality
          }
        } else {
          if (this.items[i].quality < 50) {
            this.increaseQualityForQualityLessThan50(i)
          }
        }
      }
    }

    return this.items;
  }

  increaseQuality(i: number) {
    return this.items[i].quality + 1;
  }

  decreaseQuality(i: number) {
    return this.items[i].quality - 1;
  }

  increaseQualityForQualityLessThan50(i: number) {
    return this.items[i].quality = this.increaseQuality(i)
  }

  decreaseQualityFor(i: number) {
    if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
      return this.items[i].quality = this.decreaseQuality(i)
    }
  }
}


