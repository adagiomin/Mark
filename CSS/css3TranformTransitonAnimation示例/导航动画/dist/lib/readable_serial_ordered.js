nctionalRGB1 = (node, children) => isRgbish(node) && children.every((child, index) => typeof functionalRGB1Match[index] === 'function' && functionalRGB1Match[index](child));

const matchFunctionalRGB2 = (node, children) => isRgbish(node) && children.every((child, index) => typeof functionalRGB2Match[index] === 'function' && functionalRGB2Match[index](child));

const newComma = () => valuesParser.comma({
  value: ','
});

export default index;
//# sourceMappingURL=index.es.mjs.map
                                                                                                                                                                                                                                                                                                                                                                                                                                                                        