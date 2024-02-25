type Text1 = {
    $: {
        type: 'Text1',
    }
    text: string;
}

type Number2 = {
    $: {
        type: 'Number2',
    }
    num: number;
}

type Field = Text1 | Number2;

const field: Field = {
    $: {
        type: 'Text1',
    },
    text: 'hello',
}

function hello(field: Field) {
    switch (field.$.type) {
        case 'Text1':
            console.log(field.text);
            break;
        case 'Number2':
            console.log(field.num);
            break;
        default:
            console.log('unknown');
    }
}