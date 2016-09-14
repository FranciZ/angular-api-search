describe('customFilter', function() {

    beforeEach(module('webapp'));

    it('should ...', inject(function($filter) {

        var filter = $filter('customFilter');

        expect(filter('input')).toEqual('output');

    }));

});
