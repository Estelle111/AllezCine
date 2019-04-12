<template>
    <div class="formAndTitle">
        <div class="formTitle">Commentaires</div>
        <div class="formCard">
            <form @submit="addComment">
                <div>
                    <label for="titre"></label>
                    <input type="text" name="titre" value="" placeholder="Titre..." class="inputTitle">
                </div>
                <div>
                    <label for="commentaire"></label>
                    <input type="textarea" name="commentaire" value="" placeholder="Ajouter un commentaire..." class="inputText">
                </div>
                <div class="formBtn">
                    <Btn type="sumbit" :text="'AJOUTER LE COMMENTAIRE'"/>
                </div>
            </form>
        </div>
       
    </div>
</template>

<script>
import {axios} from '../../axios'
import Btn from '../btn/Btn.vue'

export default {
    name:'Form',
    components:{
        Btn,
    },
    props: {
        forceRerender: {
            type: Function
        },
    },
    data () {
		return {
			comments: null,
			loading: true,
			errored: false
		}
	},
    methods: {
        addComment(e){
            e.preventDefault()
            this.forceRerender()
            if (e.target.titre.value != '' && e.target.commentaire.value != ''){
                this.createComment(this.$router.history.current.params.id, e.target.titre.value, e.target.commentaire.value)
            }
        },
        createComment(idVideo, titre, commentaire){
            axios
                .get(`http://localhost:8888/AllezCine/php/create.php?idVideo=${idVideo}&titre=${titre}&commentaire=${commentaire}`)
                .then(response => {
                    this.comments = response.data
                })
                .catch(error => {
                    this.errored = true
                })
                .finally(() => this.loading = false) 
        },
        mounted(){
            this.comments = this.getId(this.$router.history.current.params.id)
        }
    },
}
</script>

<style scoped>
    .formAndTitle {
        margin: 10% 0 10% 0;
        display: flex;
        flex-direction: column;
    }
    .formTitle {
        font-size: 25px;
        margin-bottom: 15px;
        color: #a6a6a6;
    }
    form {
        border-radius: 5px;
        display: flex;
        flex-direction: column;
        background-color: white;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 5px 0 rgba(0, 0, 0, 0.19);
    }
    input {
        width: 70%;
        margin: 20px 0 0 20px;
        padding: 5px 0 0 10px;
        font-weight: bold;
        font-size: 14px;
        border-radius: 5px;
    }
    .inputTitle {
        height: 50px;
    }
    .inputText {
        height: 130px;
        padding-bottom : 100px ; 
    }
    .formBtn {
        text-align: right;
        padding: 20px 42px 15px 0;;
        
    }
    button {
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 5px 0 rgba(0, 0, 0, 0.19);
        letter-spacing: 0px;
        padding: 10px;
    }
</style>