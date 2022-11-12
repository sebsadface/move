script {
    use 0x267addb13ff3fff053c1728da5a8ef6c165fbc4f::HelloWorld;
    use 0x267addb13ff3fff053c1728da5a8ef6c165fbc4f::Debug;

    fun main(){
        let five = HelloWorld::gimme_five();

        Debug::print<u8>(&five);
    }
}