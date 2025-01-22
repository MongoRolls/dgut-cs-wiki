---
title: 测试元素
description: 测试元素
---

# [官方 Markdown 文档](https://starlight.astro.build/zh-cn/guides/authoring-content/#note-%E6%97%81%E7%99%BD)

## Heading example

Here is an example of headings. You can use this heading by the following markdown rules. For example: use `#` for heading 1 and use `######` for heading 6.

## Heading 1

## Heading 2

### Heading 3

#### Heading 4

##### Heading 5

###### Heading 6

---

```js
// 带有语法高亮的 JavaScript 代码。
var fun = function lang(l) {
  dateformat.i18n = require('./lang/' + l);
  return true;
};
```

```js
// my-test-file.js

// my-test-file.js
console.log('Hello World!');
```

---

## Admonition

This is my own component which is auto-imported in all mdx files. You can use it like:

```jsx
<Admonition variant="info">Your text here</Admonition>
```

Admonition `variant="tip"`. Use this to provide a cool tip.

Admonition `variant="caution"`. Use this to warn people of potential issues.

Admonition `variant="danger"`. Use this to tell people not to do something.

Admonition `variant="info"`. Use this to provide extra secret sauce.

## Newsletter

Custom newsletter signup you can use anywhere. This is auto-imported in all mdx files. Hook it up to your mailing list like Mailchimp or MailerLite.

```jsx
<Newsletter />
```

### In the know

Subscribe to get my newest posts straight to your inbox.

I won't send you spam. Unsubscribe at any time.

### Emphasis

The emphasis, aka italics, with _asterisks_ or _underscores_.

Strong emphasis, aka bold, with **asterisks** or **underscores**.

The combined emphasis with **asterisks and _underscores_**.

Strikethrough uses two tildes. Scratch this.

---

## Link

[I’m markdown link](https://www.google.com/)

Some text to show that the reference links can follow later.

---

## Paragraph

Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam nihil enim maxime corporis cumque totam aliquid nam sint inventore optio modi neque laborum officiis necessitatibus, facilis placeat pariatur! Voluptatem, sed harum pariatur adipisci voluptates voluptatum cumque, porro sint minima similique magni perferendis fuga! Optio vel ipsum excepturi tempore reiciendis id quidem? Vel in, doloribus debitis nesciunt fugit sequi magnam accusantium modi neque quis, vitae velit, pariatur harum autem a! Velit impedit atque maiores animi possimus asperiores natus repellendus excepturi sint architecto eligendi non, omnis nihil. Facilis, doloremque illum. Fugit optio laborum minus debitis natus illo perspiciatis corporis voluptatum rerum laboriosam.

---

## Ordered List

1. List item
2. List item
3. List item
4. List item
5. List item

---

## Unordered List

- List item
- List item
- List item
- List item
- List item

---

## Code and Syntax Highlighting

This is an `Inline code` sample.

```javascript
var s = 'JavaScript syntax highlighting';
alert(s);
```

```python
s = "Python syntax highlighting"
print s
```

---

## Blockquote

> This is a blockquote example.

---

## Tables

| Markdown | Less      | Pretty     |
| -------- | --------- | ---------- |
| _Still_  | `renders` | **nicely** |
| 1        | 2         | 3          |

There must be at least 3 dashes separating each header cell. The outer pipes (|) are optional, and you don’t need to make the raw Markdown line up prettily. You can also use inline Markdown.

:::tip[自定义旁白]
This is a warning
:::

:::note

This is a note

:::

::: caution

This is a caution

:::

::: danger

This is a danger

:::
