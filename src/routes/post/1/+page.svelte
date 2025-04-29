<script lang="ts">
	import Warning from '$lib/components/Warning.svelte';
	import Code from '$lib/components/Code.svelte';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
</script>

<p class="pb-4 text-justify text-lg">
	내가 Rust를 과도하게 사랑하는 건지, 요즘 손이 가는 기술들은 하나 같이 다 Rust로 만들어진 것들이다.
	<a href="https://www.surrealdb.com" class="anchor">SurrealDB</a>가 그 시작이었고, 그 다음은
	<a href="https://www.meilisearch.com" class="anchor">Meilisearch</a>다. 아주 간단한 검색 엔진이고,
	(그렇다기엔 매우 강력한 엔진이고,) 더 널리 쓰이는 검색 엔진인
	<a href="https://www.elastic.co/" class="anchor">Elasticsearch</a>보다 내 입장에선 더 이해하기
	쉬운 로직으로 구성되어 있었기에 그냥 저냥 손이 갔다.
</p>
<p class="pb-4 text-justify text-lg">
	그래서 사용하는 데에 익숙해질 겸 토이 프로젝트를 하나 개발해보고 있는데, 바로 평가원 수학 문제
	검색 엔진이다. 좀 challenging하다 느낄 만한 부분은 어떻게 수식을 인덱싱하냐는 건데, 사실 아직
	데이터 정형에 대한 감이 잡혀 있지는 않다. 빨리 이를 구성해야 뭐라도 진척이 될 텐데 말이다.
</p>
<p class="pb-4 text-justify text-lg">
	하여튼, 빨리 소스를 보자. 어떤 식으로 구성되어 있는지 매우 궁금하다. 오늘은 인덱싱에 대해 확인해
	볼 것이다. 궁금한 사람은 직접 소스를 확인하도록. (<a
		href="https://github.com/meilisearch/meilisearch/tree/main/crates/milli"
		class="anchor"
	>
		MeiliSearch 엔진 소스 리포지토리
	</a>)
</p>
<Warning>
	<p class="text-sm">
		읽기 쉬운 코드 베이스는 아니다. 부실한 코멘트와 약간 규격이 없는 듯한 구조 때문인데, 걍 감안하고
		보도록 하자.
	</p>
</Warning>
<h2 class="h2 pb-4">인덱스</h2>
<p class="pb-4 text-justify text-lg">
	다음은 MeiliSearch 내부 엔진에서 사용하는 Index 스트럭트 구조이다.
</p>
<Code code={data.sourceCodes[0].code} lang={data.sourceCodes[0].lang} />
<p class="pb-4 text-justify text-lg">
	기본적으로 MeiliSearch는 도큐먼트 기반 인덱싱을 사용한다. 도큐먼트 기반 인덱싱이란 그냥 말 그대로
	하나의 데이터를 구성하는 모든 필드를 인덱싱하는 방식인데, 위 구성 요소를 보면 알겠지만 진짜
	인덱스로 쓸 수 있는 모든 방식의 요소를 다 Roaring Bitmap 구조로 분해하여 LMDB 안에 집어 넣고 있다.
</p>
<p class="pb-4 text-justify text-lg">
	여기서 마지막에서 두 번째 필드를 보면 임베딩 벡터 LMDB도 있는데, 여기 보면 Arroy라는 게 있는데
	이건 오타가 아니고 MeiliSearch 내부에서 사용하는 ANN 모델이다. (<a
		href="https://github.com/meilisearch/arroy"
		class="anchor">Arroy 리포지토리</a
	>) 트리 구조가 조금 신기한데, 분기 노드가 따로 있다고 한다. 원본이 바뀌는 과정을 좀 더 메모리
	효율적이게 수행하기 위함이다. 이걸 incremental indexing이라고 하는데, 뭐 내부는 알아서 잘
	해놨겠거니 하고 디테일은 귀찮아서 제대로 보진 않았다. 나중에 자기 전에 쭉 읽어나 볼까 생각 중이다.
	(요건 좀 깔끔하다. 처음부터 이걸 볼 걸...)
</p>
