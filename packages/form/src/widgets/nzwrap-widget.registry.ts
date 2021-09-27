import { NzWidgetRegistry } from './nz-widget.registry';

export class WrapWidget {
  key: string;
  icon: string;
  title: string;
  group: string;
}

export class NzWrapWidgetRegistry extends NzWidgetRegistry {
  wrap: { [key: string]: WrapWidget } = {};

  constructor() {
    super();
    this.registerWrap({ key: 'object', icon: 'windows', title: 'object', group: '分组A' });
    this.registerWrap({ key: 'array', icon: 'windows', title: 'array', group: '分组A' });
    this.registerWrap({ key: 'text', icon: 'windows', title: 'text', group: '分组A' });
    this.registerWrap({ key: 'string', icon: 'windows', title: 'string', group: '分组A' });
    this.registerWrap({ key: 'number', icon: 'windows', title: 'number', group: '分组A' });
    this.registerWrap({ key: 'integer', icon: 'windows', title: 'integer', group: '分组B' });
    this.registerWrap({ key: 'date', icon: 'windows', title: 'date', group: '分组B' });
    this.registerWrap({ key: 'time', icon: 'windows', title: 'time', group: '分组B' });
    this.registerWrap({ key: 'radio', icon: 'windows', title: 'radio', group: '分组B' });
    this.registerWrap({ key: 'checkbox', icon: 'windows', title: 'checkbox', group: '分组C' });
    this.registerWrap({ key: 'boolean', icon: 'windows', title: 'boolean', group: '分组C' });
    this.registerWrap({ key: 'textarea', icon: 'windows', title: 'textarea', group: '分组C' });
    this.registerWrap({ key: 'select', icon: 'windows', title: 'select', group: '分组D' });
    this.registerWrap({ key: 'tree-select', icon: 'windows', title: 'tree-select', group: '分组D' });
    this.registerWrap({ key: 'tag', icon: 'windows', title: 'tag', group: '分组E' });
    this.registerWrap({ key: 'upload', icon: 'windows', title: 'upload', group: '分组E' });
    this.registerWrap({ key: 'transfer', icon: 'windows', title: 'transfer', group: '分组E' });
    this.registerWrap({ key: 'slider', icon: 'windows', title: 'slider', group: '分组E' });
    this.registerWrap({ key: 'rate', icon: 'windows', title: 'rate', group: '分组F' });
    this.registerWrap({ key: 'autocomplete', icon: 'windows', title: 'autocomplete', group: '分组G' });
    this.registerWrap({ key: 'cascader', icon: 'windows', title: 'cascader', group: '分组G' });
    this.registerWrap({ key: 'mention', icon: 'windows', title: 'mention', group: '分组G' });
    this.registerWrap({ key: 'custom', icon: 'windows', title: 'custom', group: '分组G' });
  }

  registerWrap(wrap: WrapWidget) {
    this.wrap[wrap.key] = wrap;
  }
}
