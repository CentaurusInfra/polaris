// +build !ignore_autogenerated

/*
Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

// Code generated by controller-gen. DO NOT EDIT.

package v1

import (
	runtime "k8s.io/apimachinery/pkg/runtime"
)

// DeepCopyInto is an autogenerated deepcopy function, copying the receiver, writing into out. in must be non-nil.
func (in *CPUUsageSloMapping) DeepCopyInto(out *CPUUsageSloMapping) {
	*out = *in
	out.TypeMeta = in.TypeMeta
	in.ObjectMeta.DeepCopyInto(&out.ObjectMeta)
	out.Spec = in.Spec
	out.Status = in.Status
}

// DeepCopy is an autogenerated deepcopy function, copying the receiver, creating a new CPUUsageSloMapping.
func (in *CPUUsageSloMapping) DeepCopy() *CPUUsageSloMapping {
	if in == nil {
		return nil
	}
	out := new(CPUUsageSloMapping)
	in.DeepCopyInto(out)
	return out
}

// DeepCopyObject is an autogenerated deepcopy function, copying the receiver, creating a new runtime.Object.
func (in *CPUUsageSloMapping) DeepCopyObject() runtime.Object {
	if c := in.DeepCopy(); c != nil {
		return c
	}
	return nil
}

// DeepCopyInto is an autogenerated deepcopy function, copying the receiver, writing into out. in must be non-nil.
func (in *CPUUsageSloMappingList) DeepCopyInto(out *CPUUsageSloMappingList) {
	*out = *in
	out.TypeMeta = in.TypeMeta
	in.ListMeta.DeepCopyInto(&out.ListMeta)
	if in.Items != nil {
		in, out := &in.Items, &out.Items
		*out = make([]CPUUsageSloMapping, len(*in))
		for i := range *in {
			(*in)[i].DeepCopyInto(&(*out)[i])
		}
	}
}

// DeepCopy is an autogenerated deepcopy function, copying the receiver, creating a new CPUUsageSloMappingList.
func (in *CPUUsageSloMappingList) DeepCopy() *CPUUsageSloMappingList {
	if in == nil {
		return nil
	}
	out := new(CPUUsageSloMappingList)
	in.DeepCopyInto(out)
	return out
}

// DeepCopyObject is an autogenerated deepcopy function, copying the receiver, creating a new runtime.Object.
func (in *CPUUsageSloMappingList) DeepCopyObject() runtime.Object {
	if c := in.DeepCopy(); c != nil {
		return c
	}
	return nil
}

// DeepCopyInto is an autogenerated deepcopy function, copying the receiver, writing into out. in must be non-nil.
func (in *CPUUsageSloMappingSpec) DeepCopyInto(out *CPUUsageSloMappingSpec) {
	*out = *in
	out.SloMapping = in.SloMapping
}

// DeepCopy is an autogenerated deepcopy function, copying the receiver, creating a new CPUUsageSloMappingSpec.
func (in *CPUUsageSloMappingSpec) DeepCopy() *CPUUsageSloMappingSpec {
	if in == nil {
		return nil
	}
	out := new(CPUUsageSloMappingSpec)
	in.DeepCopyInto(out)
	return out
}

// DeepCopyInto is an autogenerated deepcopy function, copying the receiver, writing into out. in must be non-nil.
func (in *CPUUsageSloMappingStatus) DeepCopyInto(out *CPUUsageSloMappingStatus) {
	*out = *in
}

// DeepCopy is an autogenerated deepcopy function, copying the receiver, creating a new CPUUsageSloMappingStatus.
func (in *CPUUsageSloMappingStatus) DeepCopy() *CPUUsageSloMappingStatus {
	if in == nil {
		return nil
	}
	out := new(CPUUsageSloMappingStatus)
	in.DeepCopyInto(out)
	return out
}

// DeepCopyInto is an autogenerated deepcopy function, copying the receiver, writing into out. in must be non-nil.
func (in *ElasticityStrategyKind) DeepCopyInto(out *ElasticityStrategyKind) {
	*out = *in
}

// DeepCopy is an autogenerated deepcopy function, copying the receiver, creating a new ElasticityStrategyKind.
func (in *ElasticityStrategyKind) DeepCopy() *ElasticityStrategyKind {
	if in == nil {
		return nil
	}
	out := new(ElasticityStrategyKind)
	in.DeepCopyInto(out)
	return out
}

// DeepCopyInto is an autogenerated deepcopy function, copying the receiver, writing into out. in must be non-nil.
func (in *SloMapping) DeepCopyInto(out *SloMapping) {
	*out = *in
	out.SloTarget = in.SloTarget
	out.ElasticityStrategy = in.ElasticityStrategy
}

// DeepCopy is an autogenerated deepcopy function, copying the receiver, creating a new SloMapping.
func (in *SloMapping) DeepCopy() *SloMapping {
	if in == nil {
		return nil
	}
	out := new(SloMapping)
	in.DeepCopyInto(out)
	return out
}

// DeepCopyInto is an autogenerated deepcopy function, copying the receiver, writing into out. in must be non-nil.
func (in *SloTarget) DeepCopyInto(out *SloTarget) {
	*out = *in
	out.TargetRef = in.TargetRef
}

// DeepCopy is an autogenerated deepcopy function, copying the receiver, creating a new SloTarget.
func (in *SloTarget) DeepCopy() *SloTarget {
	if in == nil {
		return nil
	}
	out := new(SloTarget)
	in.DeepCopyInto(out)
	return out
}
