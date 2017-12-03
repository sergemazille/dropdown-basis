# Dropdown Basis

Simple dropdown component

Works on modern browsers only (uses es6 modules and css custom properties)

## Usage

The triggering element (button, anchor, span or whatever) needs to contain `data-toggle="dropdown"` attribute.

To hide back the `.dropdown` element, just click again on the trigger button, anywhere else on the page or move your mouse outside a `.--trigger-hover` `.dropdown`'s trigger.

Let's see some 'core' examples:

### Trigger a `.dropdown` with a button, through a `[data-target]` attribute
```html
<!-- button triggered dropdown -->
<button data-toggle="dropdown" data-target="#menu">Trigger dropdown with a button</button>

<div id="menu" class="dropdown">
    <p>This dropdown has been triggered by <b>a button</b></p>
</div>
```

### Trigger a `.dropdown` with an anchor, through a `[href]` attribute
```html
<!-- anchor triggered dropdown -->
<a data-toggle="dropdown" href="#menu">Trigger dropdown with an anchor</a>

<div id="menu" class="dropdown bg-gray">
    <p>This dropdown has been triggered by <b>an anchor</b></p>
</div>
```

### Trigger a `.dropdown` with a button inside a `.dropdown-group` element
```html
<!-- trigger and '.dropdown' are enclosed in an '.dropdown-group' element, no need for a [data-target] or a [href] attributes here -->
<div class="dropdown-group">

    <button data-toggle="dropdown">Trigger dropdown within a group</button>

    <div class="dropdown">
        <p>This dropdown has been triggered within <b>a dropdown-group</b>, without being specifically targeted</p>
    </div>
</div>
```

## Dropdown: Modifiers
**`.--type-block`**

By default, a `.dropdown` element will appear above the page's content. Adding the `.--type-block` modifier will get the element inside the content flow, as a block type would.

`<div class="dropdown --type-block">Lorem ipsum...</div>`

**`.--trigger-hover`**

This option allow a `.dropdown` element to be triggered via an hover event on the trigger element.

Both trigger and `.dropdown` elements has to be inside the same `.dropdown-group` container:

```html
<!-- dropdown is triggered by hovering the dropdown-group trigger element -->
<div class="dropdown-group">

    <div data-toggle="dropdown">Trigger dropdown on hover</div>

    <div class="dropdown --trigger-hover">
        <p>This dropdown has been triggered by an hover event</p>
    </div>
</div>
```
