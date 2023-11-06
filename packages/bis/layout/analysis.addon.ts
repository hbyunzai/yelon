export class AnalysisAddon {
  static putValueInAnalysis(values: Record<any, any>) {
    if (!window) return
    // @ts-ignore
    if (!window['yunzai']) return
    // @ts-ignore
    if (window['yunzai']['extra']) {
      // @ts-ignore
      window['yunzai']['extra'] = {...window['yunzai']['extra'], ...values}
    }else{
      // @ts-ignore
      window['yunzai']['extra'] = {...values}
    }
  }
}
