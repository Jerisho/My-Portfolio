const useObserver = () => {
	return (refs, cb) => {
		const observer = new IntersectionObserver(
			(entries) => {
				const entry = entries.find((e) => e.isIntersecting);
				if (!entry) {
					return;
				}
				cb(entry.target);
			},
			{
				rootMargin: "0px 0px 0px 0px",
				root: null,
				threshold: 0.5,
			}
		);
		refs.forEach((ref) => {
			observer.observe(ref.current);
		});
	};
};

export default useObserver;
