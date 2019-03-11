declare module "react-clipboard.js" {
  interface IReactClipboardProps {
    className?: string;
    component?: string; // keyof HTMLElementTagNameMap
    onClick: (e: ClipboardJS.Event) => void;
    onError?: (e: ClipboardJS.Event) => void;
    onSuccess?: (e: ClipboardJS.Event) => void;
    options?: ClipboardJS.Options;
    style?: React.CSSProperties;

    /**
     * Passes a "type" attribute to the underlying DOM element
     * For example, `<button type="submit">Copy</button>`
     */
    type?: string;
  }

  export default class ReactClipboard extends React.Component<
    IReactClipboardProps
  > {
    // Could improvements be made here?
  }
}
