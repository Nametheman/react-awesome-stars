# React Star Rating Component

A flexible and customizable star rating component for React applications with TypeScript support.

## Features

- ⭐ Interactive star rating with hover effects
- 🎨 Fully customizable colors and sizes
- 🔧 Support for half-star ratings
- 📱 Responsive and accessible
- 🎭 Smooth animations and transitions
- 🏷️ Optional tooltips and rating display
- ♿ Disabled state support
- 📦 Zero dependencies (except React)

## Installation

```bash
npm install react-star-rating-component
```

or

```bash
yarn add react-star-rating-component
```

## Basic Usage

```tsx
import React, { useState } from "react";
import { StarRating } from "react-star-rating-component";

function App() {
  const [rating, setRating] = useState(0);

  return (
    <div>
      <h2>Rate this product:</h2>
      <StarRating rating={rating} onRatingChange={setRating} maxRating={5} />
    </div>
  );
}
```

## Advanced Usage

```tsx
import React, { useState } from "react";
import { StarRating } from "react-star-rating-component";

function AdvancedExample() {
  const [rating, setRating] = useState(3.5);

  return (
    <div>
      <StarRating
        rating={rating}
        onRatingChange={setRating}
        maxRating={5}
        size="lg"
        fillColor="#ffd700"
        emptyColor="#e5e7eb"
        hoverColor="#fbbf24"
        allowHalf={true}
        showRating={true}
        showTooltip={true}
        tooltipLabels={["Terrible", "Bad", "Okay", "Good", "Excellent"]}
        animationDuration={200}
        className="my-custom-class"
      />

      <p>Current rating: {rating}</p>
    </div>
  );
}
```

## Props

| Prop                | Type                                             | Default                                          | Description                           |
| ------------------- | ------------------------------------------------ | ------------------------------------------------ | ------------------------------------- |
| `rating`            | `number`                                         | `0`                                              | Current rating value (0 to maxRating) |
| `maxRating`         | `number`                                         | `5`                                              | Maximum number of stars               |
| `interactive`       | `boolean`                                        | `true`                                           | Whether the rating is interactive     |
| `onRatingChange`    | `(rating: number) => void`                       | `undefined`                                      | Callback fired when rating changes    |
| `size`              | `"xs" \| "sm" \| "md" \| "lg" \| "xl" \| number` | `"md"`                                           | Size of the stars                     |
| `fillColor`         | `string`                                         | `"#fbbf24"`                                      | Color of filled stars                 |
| `emptyColor`        | `string`                                         | `"#d1d5db"`                                      | Color of empty stars                  |
| `hoverColor`        | `string`                                         | `"#f59e0b"`                                      | Color of stars on hover               |
| `allowHalf`         | `boolean`                                        | `false`                                          | Show half stars                       |
| `showRating`        | `boolean`                                        | `false`                                          | Show rating number next to stars      |
| `className`         | `string`                                         | `""`                                             | Custom CSS class name                 |
| `showTooltip`       | `boolean`                                        | `false`                                          | Whether to show tooltips on hover     |
| `tooltipLabels`     | `string[]`                                       | `["Poor", "Fair", "Good", "Great", "Excellent"]` | Custom tooltip labels                 |
| `animationDuration` | `number`                                         | `150`                                            | Animation duration in milliseconds    |
| `disabled`          | `boolean`                                        | `false`                                          | Disabled state                        |

## Size Options

The component supports predefined sizes and custom numeric values:

- `xs`: 16px
- `sm`: 20px
- `md`: 24px (default)
- `lg`: 32px
- `xl`: 40px
- `number`: Custom size in pixels

## Examples

### Read-only Display

```tsx
<StarRating
  rating={4.5}
  interactive={false}
  showRating={true}
  allowHalf={true}
/>
```

### Custom Colors

```tsx
<StarRating
  rating={3}
  fillColor="#ff6b6b"
  emptyColor="#f8f9fa"
  hoverColor="#ff5252"
/>
```

### Large Size with Tooltips

```tsx
<StarRating
  rating={2.5}
  size="xl"
  showTooltip={true}
  tooltipLabels={["1 Star", "2 Stars", "3 Stars", "4 Stars", "5 Stars"]}
  allowHalf={true}
/>
```

### Disabled State

```tsx
<StarRating rating={4} disabled={true} showRating={true} />
```

## Styling

The component uses Tailwind CSS classes for styling. If you're not using Tailwind, you can override styles using the `className` prop or by targeting the component's CSS classes.

### Custom CSS Example

```css
.custom-star-rating {
  /* Your custom styles */
}

.custom-star-rating .star {
  /* Individual star styles */
}
```

## Accessibility

The component includes proper accessibility features:

- Keyboard navigation support
- ARIA labels and roles
- Screen reader friendly
- Focus indicators
- Semantic HTML structure

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Internet Explorer 11+

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Changelog

### 1.0.0

- Initial release
- Interactive star rating component
- TypeScript support
- Customizable colors and sizes
- Half-star support
- Tooltip support
- Animation support
