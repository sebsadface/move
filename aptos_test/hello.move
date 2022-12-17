module publisher::hello{
    public entry fun one():u8 {
        12
    }

    #[test]
    public fun test1() {
        assert!(
            one() == 1,0
        )
    }
}