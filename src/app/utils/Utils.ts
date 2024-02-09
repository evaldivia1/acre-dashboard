export function getBorderColor(length: number):Array<string> {
    const bg = [
      'rgb(255, 99, 132)',
      'rgb(255, 159, 64)',
      'rgb(255, 205, 86)',
      'rgb(75, 192, 192)',
      'rgb(54, 162, 235)',
      'rgb(153, 102, 255)',
      'rgb(201, 203, 207)',
    ];
    let aColors: string[] = [];
    for (let i = 0; i < length; i++) {
      aColors.push(bg[i % 7]);
    }
    return aColors;
  }