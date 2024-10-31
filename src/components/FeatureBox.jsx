export default function FeatureBox({
  title,                    // Title of the box
  description,              // Main description
  type = 'info',           // info, warning, success, etc
  icon,                    // Optional icon
  codeExample,             // Optional code snippet
  links = [],              // Array of related links
  borderColor,             // Custom border color
  className,               // Additional CSS classes
}) {
  return (
    <div className={`feature-box ${type} ${className || ''}`} style={{borderColor}}>
      {icon && <div className="feature-icon">{icon}</div>}
      <h3>{title}</h3>
      <p>{description}</p>
      {codeExample && (
        <pre>
          <code>{codeExample}</code>
        </pre>
      )}
      {links.length > 0 && (
        <ul className="feature-links">
          {links.map((link, index) => (
            <li key={index}>
              <a href={link.url}>{link.text}</a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
} 