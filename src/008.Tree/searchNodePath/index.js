/**
 * 树结构根据节点查询节点路径
 * 
 */

// 数据源
let catalog = {
    id: 1001,
    children: [
        {
            id: 100101,
            children: [
                {id: 10010101, children: []},
                {id: 10010102, children: []},
            ]
        },
        {
            id: 100102,
            children: [
                {id: 10010201, children: []},
                {id: 10010202, children: []},
                {id: 10010203, children: []}
            ]
        },
    ]
};

function getPathById (data, id, fn) {
    let temppath = [];

    try {
        function getNodePath(node) {
            temppath.push(node.id);

            if (node.id == id) {
                throw('get id');
            }
            if (node.children && node.children.length) {
                for (let i = 0; i < node.children.length; i++) {
                    getNodePath(node.children[i]);
                }
                temppath.pop();
            } else {
                temppath.pop();
            }
        }
        getNodePath(data)        
    } catch (error) {
        fn(temppath);
    }
}

getPathById(catalog, 10010201, (res) => {
    console.log(res);
})