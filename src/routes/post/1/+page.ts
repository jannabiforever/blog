import type { PageLoad } from './$types';

const sourceCode1 = `pub struct Index {
   /// The LMDB environment which this index is associated with.
   pub(crate) env: heed::Env<WithoutTls>,

   /// Contains many different types (e.g. the fields ids map).
   pub(crate) main: Database<Unspecified, Unspecified>,

   /// Maps the external documents ids with the internal document id.
   pub external_documents_ids: Database<Str, BEU32>,

   /// A word and all the documents ids containing the word.
   pub word_docids: Database<Str, CboRoaringBitmapCodec>,

   /// A word and all the documents ids containing the word, from attributes for which typos are not allowed.
   pub exact_word_docids: Database<Str, CboRoaringBitmapCodec>,

   /// A prefix of word and all the documents ids containing this prefix.
   pub word_prefix_docids: Database<Str, CboRoaringBitmapCodec>,

   /// A prefix of word and all the documents ids containing this prefix, from attributes for which typos are not allowed.
   pub exact_word_prefix_docids: Database<Str, CboRoaringBitmapCodec>,

   /// Maps the proximity between a pair of words with all the docids where this relation appears.
   pub word_pair_proximity_docids: Database<U8StrStrCodec, CboRoaringBitmapCodec>,

   /// Maps the word and the position with the docids that corresponds to it.
   pub word_position_docids: Database<StrBEU16Codec, CboRoaringBitmapCodec>,
   /// Maps the word and the field id with the docids that corresponds to it.
   pub word_fid_docids: Database<StrBEU16Codec, CboRoaringBitmapCodec>,

   /// Maps the field id and the word count with the docids that corresponds to it.
   pub field_id_word_count_docids: Database<FieldIdWordCountCodec, CboRoaringBitmapCodec>,
   /// Maps the word prefix and a position with all the docids where the prefix appears at the position.
   pub word_prefix_position_docids: Database<StrBEU16Codec, CboRoaringBitmapCodec>,
   /// Maps the word prefix and a field id with all the docids where the prefix appears inside the field
   pub word_prefix_fid_docids: Database<StrBEU16Codec, CboRoaringBitmapCodec>,

   /// Maps the facet field id and the docids for which this field exists
   pub facet_id_exists_docids: Database<FieldIdCodec, CboRoaringBitmapCodec>,
   /// Maps the facet field id and the docids for which this field is set as null
   pub facet_id_is_null_docids: Database<FieldIdCodec, CboRoaringBitmapCodec>,
   /// Maps the facet field id and the docids for which this field is considered empty
   pub facet_id_is_empty_docids: Database<FieldIdCodec, CboRoaringBitmapCodec>,

   /// Maps the facet field id and ranges of numbers with the docids that corresponds to them.
   pub facet_id_f64_docids: Database<FacetGroupKeyCodec<OrderedF64Codec>, FacetGroupValueCodec>,
   /// Maps the facet field id and ranges of strings with the docids that corresponds to them.
   pub facet_id_string_docids: Database<FacetGroupKeyCodec<StrRefCodec>, FacetGroupValueCodec>,
   /// Maps the facet field id of the normalized-for-search string facets with their original versions.
   pub facet_id_normalized_string_strings: Database<BEU16StrCodec, SerdeJson<BTreeSet<String>>>,
   /// Maps the facet field id of the string facets with an FST containing all the facets values.
   pub facet_id_string_fst: Database<BEU16, FstSetCodec>,

   /// Maps the document id, the facet field id and the numbers.
   pub field_id_docid_facet_f64s: Database<FieldDocIdFacetF64Codec, Unit>,
   /// Maps the document id, the facet field id and the strings.
   pub field_id_docid_facet_strings: Database<FieldDocIdFacetStringCodec, Str>,

   /// Maps an embedder name to its id in the arroy store.
   pub embedder_category_id: Database<Str, U8>,
   /// Vector store based on arroy™.
   pub vector_arroy: arroy::Database<Unspecified>,

   /// Maps the document id to the document as an obkv store.
   pub(crate) documents: Database<BEU32, ObkvCodec>,
}`;

export const load: PageLoad = async () => {
	return {
		sourceCodes: [
			{
				lang: 'rust',
				code: sourceCode1
			}
		]
	};
};
