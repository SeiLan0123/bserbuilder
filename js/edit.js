const editor = new EditorJS({

    holder: 'editor',

    tools: {
        header: Header,        
        list: List,        
        checklist: Checklist,
        quote: Quote,
        code: CodeTool
    }

});

function save(){
    const storageRef = firebase.storage().ref();
    const testImgsRef = storageRef.child("testpostjson/test.json")

    editor.save().then((outputData) => {
        const txt = JSON.stringify(outputData);
        testImgsRef.putString(txt).then(function(snapshot) {
            console.log('Uploaded a raw string!');
          });
        console.log('Article data: ', outputData)
       }).catch((error) => {
        console.log('Saving failed: ', error)
       });
}