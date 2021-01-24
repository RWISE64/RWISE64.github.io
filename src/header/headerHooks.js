function onClickOutside(ref, handler) {
    // Used functionality from css-tricks hamburger menu post, adding comments for understanding
    // useEffect = run after first render and every update
    useEffect(() => {
        // Create event listener
        const listener = event => {
            // Don't handle if element is the current element or contains the current element
            if (!ref.current || ref.current.contains(event.target)) {
                return;
            }
            handler(event);
        }
        // Add listener for any mousedown
        document.addEventListener('mousedown', listener);
        // Return function removes the event listener on unmount
        return () => {
            document.removeEventListener('mousedown', listener);
        };
    },
    [ref, handler],
    );
}