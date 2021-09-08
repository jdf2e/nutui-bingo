import pinyin from 'pinyin';
export const transformData = (regionData) => {
    if (!Array.isArray(regionData))
        throw new TypeError('params muse be array.');
    if (!regionData.length)
        return [];
    const newData = [];
    regionData = regionData.map((item) => {
        if (!item.name)
            return new Error('the data must includes `name` props');
        let code = pinyin(item.name, {
            style: pinyin.STYLE_NORMAL
        });
        return {
            ...item,
            firstCode: code[0][0].charAt(0).toUpperCase()
        };
    });
    regionData = regionData.sort((a, b) => {
        return a.firstCode.localeCompare(b.firstCode);
    });
    regionData.forEach((item) => {
        const index = newData.findIndex((value) => value.title === item.firstCode);
        if (index <= -1) {
            newData.push({
                title: item.firstCode,
                list: [].concat(item)
            });
        }
        else {
            newData[index] = {
                title: item.firstCode,
                list: newData[index].list.concat(item)
            };
        }
    });
    return newData;
};
